import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import clsx from 'clsx';

interface CodeHighlighterProps {
  code: string;
  language: string;
  className?: string;
  showLineNumbers?: boolean;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language,
  className,
  showLineNumbers = true,
}) => {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={language as any}>
      {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            highlightClassName,
            'rounded-lg p-4 overflow-x-auto text-sm',
            'bg-gradient-to-r from-slate-900/50 to-slate-800/50',
            'border border-purple-400/20',
            className
          )}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {showLineNumbers && (
                <span className="inline-block w-8 text-right pr-4 text-slate-500 select-none">
                  {i + 1}
                </span>
              )}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;

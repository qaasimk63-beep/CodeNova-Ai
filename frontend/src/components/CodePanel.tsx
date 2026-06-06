import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

interface CodePanelProps {
  code: string;
  language: string;
}

export default function CodePanel({ code, language }: CodePanelProps) {
  const normalized = language.toLowerCase();
  const languageId = normalized.includes('html')
    ? 'markup'
    : normalized.includes('js')
    ? 'javascript'
    : normalized.includes('ts')
    ? 'typescript'
    : normalized.includes('python')
    ? 'python'
    : normalized.includes('ruby')
    ? 'ruby'
    : normalized.includes('go')
    ? 'go'
    : normalized.includes('c#')
    ? 'csharp'
    : normalized.includes('java')
    ? 'java'
    : 'javascript';

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-sm shadow-glow">
      <div className="mb-4 flex items-center justify-between gap-3 text-slate-300">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em]">{languageId}</span>
      </div>
      <Highlight {...defaultProps} theme={theme} code={code || '// Generate code to preview here'} language={languageId as any}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} overflow-x-auto rounded-3xl p-4 text-sm`} style={{ ...style, background: 'transparent' }}>
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line, key: index })}>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token, key: tokenIndex })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

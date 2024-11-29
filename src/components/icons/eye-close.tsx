type IconProps = {
  color?: string;
} & React.SVGProps<SVGSVGElement>;

export const EyeClose = (props: IconProps) => (
  <svg
    fill="none"
    height={12}
    viewBox="0 0 16 12"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.04249 1.61686c-.02952-.03235-.05003-.07189-.05948-.11466-.00944-.04276-.00748-.08726.00569-.12903.01316-.04178.03707-.07936.06933-.10898.03225-.02963.07173-.05026.11446-.05983.59947-.13707 1.21257-.205631 1.8275-.204379 2.18001 0 4.16061.828749 5.72871 2.396879 1.1769 1.17687 1.7063 2.35125 1.7282 2.40062.0284.06395.0431.13315.0431.20313s-.0147.13918-.0431.20312c-.0219.04938-.5513 1.22313-1.7282 2.4-.1783.1775-.3614.34563-.5493.50438-.0495.04197-.1133.06309-.178.0589-.0647-.0042-.1253-.03339-.1689-.0814zm7.32751 9.54684c.0451.0485.0801.1054.103.1674.023.0621.0334.1281.0306.1942s-.0186.131-.0467.1909c-.028.06-.0676.1137-.1166.1582s-.1063.0789-.1686.1011-.1285.0317-.1945.0282c-.0661-.0036-.1308-.0202-.1904-.0489-.0596-.0288-.1129-.0691-.1568-.1186l-1.38-1.5156c-1.0234.4527-2.13093.6842-3.25001.6794-2.18 0-4.16062-.8288-5.72875-2.39627-1.17687-1.17687-1.708746-2.35062-1.728121-2.4-.028429-.06394-.043119-.13314-.043119-.20312s.01469-.13918.043119-.20313c.019375-.0475.551251-1.22375 1.728121-2.40062.47018-.47235.99467-.88733 1.5625-1.23625l-1.20375-1.324379c-.04508-.048429-.0801-.105324-.10303-.167388-.02294-.062064-.03332-.128063-.03056-.194171.00276-.066107.01862-.13101.04665-.190944.02803-.059935.06767-.113711.11664-.15821.04896-.0444996.10628-.0788379.16861-.1010248.06233-.02218694.12845-.03178117.19452-.02822675.06607.00355443.13078.02018695.19037.04893335.0596.0287465.11289.0690352.1568.1185312zm-4.09313-3.01559-3.29313-3.625c-.33933.46493-.50783 1.03272-.47706 1.60749.03078.57478.25894 1.12132.64598 1.54737.38704.42604.90924.70548 1.47843.79113.56919.08566 1.1505-.02772 1.64578-.32099z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  color?: string;
} & React.SVGProps<SVGSVGElement>;

export const EyeOpen = (props: IconProps) => (
  <svg
    fill="none"
    height={10}
    viewBox="0 0 16 10"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.4569 4.7975c-.0219-.04937-.5513-1.22375-1.7282-2.40063-1.5681-1.56812-3.5487-2.39687-5.72871-2.39687-2.18 0-4.16062.82875-5.72875 2.39687-1.17687 1.17688-1.708746 2.35313-1.728121 2.40063-.028429.06394-.043119.13314-.043119.20312s.01469.13918.043119.20313c.021875.04937.551251 1.22313 1.728121 2.4 1.56813 1.5675 3.54875 2.39625 5.72875 2.39625 2.18001 0 4.16061-.82875 5.72871-2.39625 1.1769-1.17687 1.7063-2.35063 1.7282-2.4.0284-.06395.0431-.13315.0431-.20313s-.0147-.13918-.0431-.20312zm-7.45691 2.7025c-.49445 0-.9778-.14662-1.38892-.42133-.41112-.2747-.73156-.66515-.92077-1.12196-.18922-.45682-.23873-.95948-.14227-1.44444.09646-.48495.33457-.93041.6842-1.28004s.79509-.58773 1.28004-.68419c.48495-.09647.98762-.04696 1.44443.14226.45682.18922.84726.50965 1.122.92077.2747.41113.4213.89448.4213 1.38893 0 .66304-.2634 1.29893-.73224 1.76777s-1.10472.73223-1.76777.73223z"
      fill="#252623"
    />
  </svg>
);

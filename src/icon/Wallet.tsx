import type { SVGProps } from "react";

const WalletSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.75 6C22.75 5.58579 22.4142 5.25 22 5.25H6C3.37665 5.25 1.25 7.37665 1.25 10V18C1.25 20.6234 3.37665 22.75 6 22.75H18C20.6234 22.75 22.75 20.6234 22.75 18V6ZM21.25 6.75V18C21.25 19.7949 19.7949 21.25 18 21.25H6C4.20507 21.25 2.75 19.7949 2.75 18V10C2.75 8.20507 4.20507 6.75 6 6.75H21.25Z"
        fill="#bdbdbd"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.75 6C22.75 3.37665 20.6234 1.25 18 1.25H12C9.37665 1.25 7.25 3.37665 7.25 6H8V6.75H22C22.4142 6.75 22.75 6.41421 22.75 6ZM21.163 5.25H8.83696C9.17555 3.81665 10.4632 2.75 12 2.75H18C19.5368 2.75 20.8245 3.81665 21.163 5.25Z"
        fill="#bdbdbd"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 11.25C1.58579 11.25 1.25 11.5858 1.25 12L1.25 16C1.25 16.4142 1.58579 16.75 2 16.75L6 16.75C7.51878 16.75 8.75 15.5188 8.75 14C8.75 12.4812 7.51878 11.25 6 11.25L2 11.25ZM2.75 12.75L6 12.75C6.69036 12.75 7.25 13.3096 7.25 14C7.25 14.6904 6.69036 15.25 6 15.25L2.75 15.25L2.75 12.75Z"
        fill="#bdbdbd"
      />
    </svg>
  );
};
export default WalletSvg;

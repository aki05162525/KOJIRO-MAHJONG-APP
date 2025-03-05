import { Button } from "@chakra-ui/react";
import { css, cva } from "../../styled-system/css";

//panda cssの練習
const buttonRecipe = cva({
	base: {
		cursor: "pointer",
		padding: "4",
		fontSize: "12px",
	},
	variants: {
		visual: {
			solid: { bg: "red.500", color: "white" },
			outline: { borderWidth: "1px", borderColor: "red.500" },
		},
		size: {
			sm: { padding: "4", fontSize: "12px" },
			lg: { padding: "8", fontSize: "20px" },
		},
	},
	defaultVariants: { visual: "outline", size: "lg" },
});
export default function Home() {
	return (
		<>
			<div className={css({ fontSize: "2xl", fontWeight: "normal" })}>
				Hello Panda!
			</div>
			<button className={buttonRecipe({ visual: "solid" })}>
				Hello, Panda!
			</button>
		</>
	);
}

import { Button } from "@chakra-ui/react";
import { css } from "../../styled-system/css";

export default function Home() {
	return (
		<div
			className={css({
				fontSize: "2xl",
				fontWeight: "bold",
			})}
		>
			Hello 🐼!
			<Button>ボタン</Button>
		</div>
	);
}

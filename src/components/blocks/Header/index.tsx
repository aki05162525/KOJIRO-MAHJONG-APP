import Image from "next/image";
import localImage from "../../../../public/logo.jpeg";
import { headerStyles, ImageSize, titleStyle } from "./styles";

export const Header = () => {
	return (
		<header className={headerStyles}>
			<Image src={localImage} alt="logo" className={ImageSize} />
			<h1 className={titleStyle}>小次郎麻雀アプリ</h1>
		</header>
	);
};

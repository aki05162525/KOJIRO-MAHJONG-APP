import { Provider } from "@/components/ui/provider";
import "./globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="ja" suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}

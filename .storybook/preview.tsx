import { Provider as ChakraProvider } from "@/components/ui/provider";
import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ChakraProvider>
				<Story />
			</ChakraProvider>
		),
	],
};

export default preview;

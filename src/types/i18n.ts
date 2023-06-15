type config = {
	locale: string;
	label: string;
	code: string;
	default?: boolean;
}[];

type params = {
	params: {
		lang: string;
	};
};

export type { config, params };

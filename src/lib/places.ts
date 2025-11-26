interface Place {
	lngLat: [number, number];
	/** Header content */
	title: string;
	/** Body is optional for more content */
	body?: string;
	visited?: boolean;
}

export const places: Place[] = [
	{
		title: 'ANZAC Cove',
		body: 'Where NZ and Aus served in WW1',
		lngLat: [26.27333224, 40.240999036],
		visited: false
	}
] as const;

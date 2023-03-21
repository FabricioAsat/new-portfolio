export const PageContainer = ({ children, id = "", principal = false }) => {
	return (
		<section
			id={id}
			className={`${principal ? "pt-24" : ""} max-w-7xl px-4 md:px-5 mx-auto h-full`}
		>
			{children}
		</section>
	);
};

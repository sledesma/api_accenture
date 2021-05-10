module.exports = [
	{
		id: 1,
		nombre: "suma",
		proceso: (productos = []) => {
			return productos.reduce((prev, actual) => prev + actual.precio, 0);
		},
	},
];

module.exports = [
	{
		id: 1,
		nombre: "ultimos",
		proceso: (productos = []) => {
      return productos.filter((val, i) => i > (productos.length - 6))
		},
	},
];

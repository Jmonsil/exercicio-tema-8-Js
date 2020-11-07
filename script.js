let registros = []

while (true) {
	let Produto = prompt ('Digite o nome do Produto');
	let PreçoProd
	while (true) {
		PreçoProd = Number(prompt('Digite o Preço do Produto'));
		if (! Number.isNaN (PreçoProd)) {
			break
		}
		alert('Preço do produto não valido, por favor digite  valor do Produto valido');
	}

	let Supermercado = prompt('Em qual supermercado compro o produto').toLowerCase();
	Supermercado = Supermercado[0].toUpperCase() + Supermercado.slice(1);

	let Compra = {
		Produto, PreçoProd,
		Supermercado
	}
	registros.push(Compra);

	let Registronovo = confirm('Deseja fazer um novo registro');
	if (Registronovo === false) {
		break
	}
}

console.table(registros);
console.log(registros);

let produtomaiscaro = oprodutomaiscaro(registros);
console.log('Registro do Produto mais caro:');

for(let Compra of produtomaiscaro) {
	console.log(`${Compra.Produto}: R$ ${Compra.PreçoProd}  `)
}

let produtomaisbarato = oprodutomaisbarato(registros);
console.log('Registro do Produto mais Barato:');

for(let Compra of produtomaisbarato) {
	console.log(`${Compra.Produto}: R$ ${Compra.PreçoProd}  `)
}





function oprodutomaiscaro(registros) {
	let produtomaiscaro = [ registros[0] ]

	for (let registro of registros.slice(1)) {
		if (registro.PreçoProd > produtomaiscaro[0].PreçoProd) {
			produtomaiscaro = [ registro ]
		}else if (registro.PreçoProd === produtomaiscaro[0].PreçoProd) {
			produtomaiscaro.push(registro)
		}
	}
	return produtomaiscaro
}


let tiposdesuper = ReddeMercados(registros);
console.log('Registro do Produto mais caro foi da:');

for(let Compra of produtomaiscaro) {
	console.log(`${Compra.Supermercado}`)
}

function ReddeMercados(registros) {
	let produtomaiscaro = [ registros[0] ]

	for (let registro of registros.slice(1)) {
		if (registro.PreçoProd > produtomaiscaro[0].PreçoProd) {
			produtomaiscaro = [ registro ]
		}else if (registro.PreçoProd === produtomaiscaro[0].PreçoProd) {
			produtomaiscaro.push(registro)
		}
	}
	return produtomaiscaro
}




function oprodutomaisbarato(registros) {
	let produtomaisbarato = [ registros[0] ]

	for (let registro of registros.slice(1)) {
		if (registro.PreçoProd < produtomaisbarato[0].PreçoProd) {
			produtomaisbarato = [ registro ]
		}else if (registro.PreçoProd === produtomaisbarato[0].PreçoProd) {
			produtomaisbarato.push(registro)
		}
	}
	return produtomaisbarato
}







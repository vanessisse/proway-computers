export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Monitor", preco: 1200.50, descricaoPreco: "À vista", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Teclado branco", preco: 749.99, descricaoPreco: "À vista", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Fone FPS", preco: 599.99, descricaoPreco: "À vista", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Fone sem fio", preco: 299.99, descricaoPreco: "À vista", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Fone de ouvido preto", preco: 399.99, descricaoPreco: "À vista", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Placas de vídeo", preco: 18449.99, descricaoPreco: "À vista", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Notebook", preco: 2500, descricaoPreco: "À vista", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Notebook potente", preco: 4500, descricaoPreco: "À vista", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse simples", preco: 20, descricaoPreco: "À vista", imagem: "./assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse preto", preco: 200, descricaoPreco: "À vista", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mouse mini", preco: 50, descricaoPreco: "À vista", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado preto", preco: 159.99, descricaoPreco: "À vista", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 },
]
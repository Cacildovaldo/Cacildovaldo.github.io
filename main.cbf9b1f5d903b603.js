"use strict";

// Função de inicialização do Web3
const initializeWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            return { web3, account: accounts[0] };
        } catch (error) {
            console.error("User denied account access");
            throw new Error("User denied account access");
        }
    } else {
        alert('MetaMask is not installed. Please install it to use this app.');
        throw new Error('MetaMask is not installed');
    }
};

// Função para carregar oportunidades de arbitragem em tempo real
const loadArbitrageOpportunities = async () => {
    // Exemplo de dados fictícios de oportunidades
    const opportunities = [
        { pair: 'DAI/USDT', profit: '1.0268%' },
        { pair: 'WETH/USDT', profit: '0.8394%' },
        // Adicione aqui a lógica para obter oportunidades reais do oráculo
    ];

    return opportunities;
};

// Função para executar a arbitragem com flash loan
const executeArbitrage = async (web3, account, tokenPair, amount) => {
    // Lógica para interagir com o contrato inteligente de flash loan
    // Exemplo de chamada para um contrato inteligente
    // const contract = new web3.eth.Contract(ABI, contractAddress);
    // const result = await contract.methods.executeArbitrage(tokenPair, amount).send({ from: account });
    // return result;

    console.log(`Executando arbitragem para ${tokenPair} com quantidade ${amount}`);
    // Placeholder para simulação
    return { success: true, message: 'Arbitragem executada com sucesso!' };
};

document.addEventListener('DOMContentLoaded', async () => {
    const connectWalletButton = document.getElementById('connectWallet');
    const walletAddressDiv = document.getElementById('walletAddress');
    const opportunitiesDiv = document.getElementById('opportunities');
    const tradeForm = document.getElementById('tradeForm');

    let web3, account;

    connectWalletButton.addEventListener('click', async () => {
        try {
            const web3Account = await initializeWeb3();
            web3 = web3Account.web3;
            account = web3Account.account;
            walletAddressDiv.textContent = `Wallet Connected: ${account}`;
            
            const opportunities = await loadArbitrageOpportunities();
            opportunities.forEach(op => {
                const opDiv = document.createElement('div');
                opDiv.textContent = `${op.pair} - Lucro: ${op.profit}`;
                opportunitiesDiv.appendChild(opDiv);
            });
        } catch (error) {
            console.error(error);
        }
    });

    tradeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const tokenPair = document.getElementById('tokenPair').value;
        const amount = document.getElementById('amount').value;
        
        try {
            const result = await executeArbitrage(web3, account, tokenPair, amount);
            alert(result.message);
        } catch (error) {
            console.error(error);
            alert('Erro ao executar arbitragem');
        }
    });
});

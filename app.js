const contractAddress = '0x731C4bFD566b53D5Fd32A96Eb0a74118E4A36536';
const contractABI = [
	[
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_candidateId",
					"type": "uint256"
				}
			],
			"name": "vote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "candidates",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "voteCount",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "candidatesCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_candidateId",
					"type": "uint256"
				}
			],
			"name": "getCandidate",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "voters",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
];

let web3;
let votingContract;

async function loadWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        loadContract();
    } else {
        document.getElementById('status').textContent = 'MetaMask is required to interact with this DApp.';
    }
}

async function loadContract() {
    votingContract = new web3.eth.Contract(contractABI, contractAddress);
    displayCandidates();
}

async function displayCandidates() {
    const candidatesDiv = document.getElementById('candidates');
    candidatesDiv.innerHTML = '';
    
    const candidatesCount = await votingContract.methods.candidatesCount().call();
    for (let i = 1; i <= candidatesCount; i++) {
        const candidate = await votingContract.methods.getCandidate(i).call();
        const candidateDiv = document.createElement('div');
        candidateDiv.innerHTML = `<p>${candidate[1]} - Votes: ${candidate[2]}</p>
                                  <button onclick="vote(${candidate[0]})">Vote for ${candidate[1]}</button>`;
        candidatesDiv.appendChild(candidateDiv);
    }
}

async function vote(candidateId) {
    const accounts = await web3.eth.getAccounts();
    try {
        await votingContract.methods.vote(candidateId).send({ from: accounts[0] });
        document.getElementById('status').textContent = 'Vote successfully cast!';
        displayCandidates();
    } catch (error) {
        document.getElementById('status').textContent = 'Failed to cast vote: ' + error.message;
    }
}

loadWeb3();

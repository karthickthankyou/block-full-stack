import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { contractAddress, myabi, url } from './myabi';

import { AbiItem } from 'web3-utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BlockchainService {
  private readonly web3: Web3;
  private readonly contract: any; // Replace with your contract type
  private readonly account: string;
  private readonly privateKey: string;

  constructor(private config: ConfigService) {
    this.web3 = new Web3(url);

    this.contract = new this.web3.eth.Contract(
      myabi as AbiItem[],
      contractAddress,
    );

    this.listenToEvents();
    this.account = this.config.get<string>('ACCOUNT');
    this.privateKey = this.config.get<string>('PRIVATE_KEY');

    this.contract = new this.web3.eth.Contract(
      myabi as AbiItem[],
      contractAddress,
    );
  }
  private listenToEvents() {
    this.contract.events
      .LandRegistered(
        {
          fromBlock: 'latest',
        },
        (error, event) => {
          console.log('Listening. Event: ', event, error);
          // Add your logic here
        },
      )
      .on('data', (event) => console.log(event))
      .on('changed', (changed) => console.log(changed))
      .on('error', (err) => console.error(err))
      .on('connected', (str) => console.log(str));
  }

  async registerLand(coordinates: string): Promise<void> {
    const tx = {
      to: this.contract.options.address,
      gas: 1000000,
      data: this.contract.methods.registerLand(coordinates).encodeABI(),
    };

    const signedTx = await this.web3.eth.accounts.signTransaction(
      tx,
      this.privateKey,
    );

    this.web3.eth
      .sendSignedTransaction(signedTx.rawTransaction)
      .on('receipt', console.log)
      .on('error', console.error);
  }
}

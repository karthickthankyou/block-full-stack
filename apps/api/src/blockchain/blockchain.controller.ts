import { Controller, Get, Post } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockChainController {
  constructor(private readonly blockchain: BlockchainService) {}
  @Get()
  getMessage() {
    return 'Hello blockchain.';
  }
  @Post()
  registerLand() {
    return this.blockchain.registerLand('lat:34, lng: -80.43');
  }
}

import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockChainController } from './blockchain.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],

  providers: [BlockchainService, BlockChainController],
  controllers: [BlockChainController],
})
export class BlockchainModule {}

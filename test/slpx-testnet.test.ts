import { describe, it, expect } from 'bun:test'
import { getTestnetMintParams } from '../src/slpx-testnet'
import { parseUnits } from 'viem'

describe('getTestnetMintParams', () => {
  describe('successful cases', () => {
    it('should return correct params for ETH on arbitrumSepolia with chain name', () => {
      const params = getTestnetMintParams('eth', 'arbitrumSepolia', '1.0')
      
      expect(params).toEqual({
        address: '0x62CA64454046BbC18e35066A6350Acb0378EB3c2',
        abi: expect.any(Array),
        functionName: 'createOrder',
        args: [
          '0x0000000000000000000000000000000000000000', // ETH address
          parseUnits('1.0', 18),
          0,
          'bifrost'
        ]
      })
    })

    it('should return correct params for DOT on baseSepolia with chain ID', () => {
      const params = getTestnetMintParams('dot', 'baseSepolia', '0.5')
      
      expect(params).toEqual({
        address: '0x262e52beD191a441CBD28dB151A11D7c41384F72',
        abi: expect.any(Array),
        functionName: 'createOrder',
        args: [
          '0x4B16E254E7848e0826eBDd3049474fD9E70A244c',
          parseUnits('0.5', 18),
          0,
          'bifrost'
        ]
      })
    })

    it('should accept custom partner code', () => {
      const params = getTestnetMintParams('dot', 'ethereumSepolia', '2.0', 'customPartner')
      
      expect(params.args[3]).toBe('customPartner')
    })

    it('should work with different decimal amounts', () => {
      const params = getTestnetMintParams('dot', 'bscTestnet', '123.456789')
      
      expect(params.args[1]).toBe(parseUnits('123.456789', 18))
    })

    it('should work with very small amounts', () => {
      const params = getTestnetMintParams('eth', 'unichainSepolia', '0.000001')
      
      expect(params.args[1]).toBe(parseUnits('0.000001', 18))
    })
  })

  describe('error cases', () => {
    it('should throw error for unsupported asset on chain', () => {
      expect(() => {
        getTestnetMintParams('glmr', 'arbitrumSepolia', '1.0')
      }).toThrow('Asset glmr not found on chain arbitrumSepolia')
    })

    it('should throw error for invalid chain name', () => {
      expect(() => {
        // @ts-ignore - testing runtime error
        getTestnetMintParams('eth', 'invalidChain', '1.0')
      }).toThrow('Unsupported chain: invalidChain')
    })

    it('should throw error for invalid chain ID', () => {
      expect(() => {
        // @ts-ignore - testing runtime error
        getTestnetMintParams('eth', 999999, '1.0')
      }).toThrow('Unsupported chain ID: 999999')
    })

    it('should throw error for zero amount', () => {
      expect(() => {
        getTestnetMintParams('eth', 'arbitrumSepolia', '0')
      }).toThrow('Amount must be a positive number')
    })

    it('should throw error for negative amount', () => {
      expect(() => {
        getTestnetMintParams('eth', 'arbitrumSepolia', '-1.0')
      }).toThrow('Amount must be a positive number')
    })

    it('should throw error for invalid partner code type', () => {
      expect(() => {
        // @ts-ignore - testing runtime error
        getTestnetMintParams('eth', 'arbitrumSepolia', '1.0', 123)
      }).toThrow('Partner code must be a string')
    })

    it('should throw error for chain without SLPX contract', () => {
      expect(() => {
        getTestnetMintParams('eth', 'moonbaseTestnet', '1.0')
      }).toThrow('Asset eth not found on chain moonbaseTestnet')
    })
  })

  describe('parameter validation', () => {
    it('should handle different supported assets on different chains', () => {
      // Test ETH on Ethereum Sepolia
      expect(() => getTestnetMintParams('eth', 'ethereumSepolia', '1.0')).not.toThrow()
      
      // Test DOT on BSC Testnet
      expect(() => getTestnetMintParams('dot', 'bscTestnet', '1.0')).not.toThrow()
      
      // Test DOT on Asset Hub
      expect(() => getTestnetMintParams('dot', 'passetHub', '1.0')).not.toThrow()
    })

    it('should correctly map chain names to chain IDs', () => {
      const paramsWithName = getTestnetMintParams('eth', 'arbitrumSepolia', '1.0')
      const paramsWithId = getTestnetMintParams('eth', 421614, '1.0') // Arbitrum Sepolia chain ID
      expect(paramsWithName.address).toBe(paramsWithId.address!)
      expect(paramsWithName.args).toEqual(paramsWithId.args)
    })


    it('should use default partner code when not provided', () => {
      const params = getTestnetMintParams('eth', 'arbitrumSepolia', '1.0')
      
      expect(params.args[3]).toBe('bifrost')
    })

    it('should preserve exact amount precision', () => {
      const amount = '1.123456789012345678'
      const params = getTestnetMintParams('eth', 'arbitrumSepolia', amount)
      
      expect(params.args[1]).toBe(parseUnits(amount, 18))
    })
  })

  describe('return value structure', () => {
    it('should return object with correct structure', () => {
      const params = getTestnetMintParams('eth', 'arbitrumSepolia', '1.0')
      
      expect(params).toHaveProperty('address')
      expect(params).toHaveProperty('abi')
      expect(params).toHaveProperty('functionName')
      expect(params).toHaveProperty('args')
      
      expect(typeof params.address).toBe('string')
      expect(Array.isArray(params.abi)).toBe(true)
      expect(params.functionName).toBe('createOrder')
      expect(Array.isArray(params.args)).toBe(true)
      expect(params.args).toHaveLength(4)
    })

    it('should have correct argument types', () => {
      const params = getTestnetMintParams('dot', 'bscTestnet', '1.0', 'test')
      
      expect(typeof params.args[0]).toBe('string') // asset address
      expect(typeof params.args[1]).toBe('bigint') // parsed amount
      expect(typeof params.args[2]).toBe('number') // always 0
      expect(typeof params.args[3]).toBe('string') // partner code
    })
  })
})
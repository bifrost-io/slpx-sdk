import { describe, it, expect } from 'bun:test'
import { Slpx } from '../src/slpx'

describe('Slpx', () => {
  it('should get contract address info', () => {
    const slpx = new Slpx()
    const contractAddressInfo = slpx.getContractAddressInfo(true)
    expect(contractAddressInfo).toBeDefined()
  })

  it('should get slpx abi', () => {
    const slpx = new Slpx()
    const slpxAbi = slpx.getSlpxAbi(true)
    expect(slpxAbi).toBeDefined()
  })
})
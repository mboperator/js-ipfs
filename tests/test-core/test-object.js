/* globals describe, before, it */

'use strict'

const expect = require('chai').expect
const IPFS = require('../../src/ipfs-core')
const bs58 = require('bs58')
const mDAG = require('ipfs-merkle-dag')
const DAGNode = mDAG.DAGNode

// TODO use arrow funtions again when https://github.com/webpack/webpack/issues/1944 is fixed
describe('object', function () {
  var ipfs

  before(function (done) {
    ipfs = new IPFS()
    done()
  })

  it('create', function (done) {
    ipfs.object.create(function (err, obj) {
      expect(err).to.not.exist
      expect(obj).to.have.property('Size')
      expect(obj.Size).to.equal(0)
      expect(obj).to.have.property('Name')
      expect(obj.Name).to.equal('')
      expect(obj).to.have.property('Hash')
      expect(bs58.encode(obj.Hash).toString())
         .to.equal('QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1n')
      expect(obj.Size).to.equal(0)
      done()
    })
  })

  it.skip('patch append-data', function (done) {

  })

  it.skip('patch add-link', function (done) {

  })

  it.skip('patch rm-link', function (done) {

  })

  it.skip('patch set-data', function (done) {

  })

  it.skip('patch append-data go-ipfs mDAG obj', function (done) {

  })

  it.skip('patch add-link go-ipfs mDAG obj', function (done) {

  })

  it.skip('patch rm-link go-ipfs mDAG obj', function (done) {

  })

  it.skip('patch set-data go-ipfs mDAG obj', function (done) {

  })

  it.skip('data', function (done) {

  })

  it.skip('links', function (done) {

  })

  it('get', function (done) {
    const mh = new Buffer(bs58.decode('QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1n'))
    ipfs.object.get(mh, function (err, obj) {
      expect(err).to.not.exist
      expect(obj.size()).to.equal(0)
      expect(obj).to.have.property('data')
      expect(obj).to.have.property('links')
      done()
    })
  })

  it('put', function (done) {
    const node = new DAGNode(new Buffer('Hello, is it me you are looking for'))
    ipfs.object.put(node, function (err) {
      expect(err).to.not.exist
      done()
    })
  })

  it.skip('stat', function (done) {

  })
})

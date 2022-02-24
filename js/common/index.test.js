import Header from "./index"

describe('Header Snapshot Test Suites', () => {
    it('should match snapshot', () => {
        expect(Header.render()).toMatchInlineSnapshot()
    })
})
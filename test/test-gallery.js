var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../gallery')

describe('Gallery component', function() {
    it('Renders the Gallery and description',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery url={url} description={description} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        var img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);
        
    });
});
var Application = require('spectron').Application
var assert = require('assert');
var path = require('path');
var electron = require('electron');

const appPath = path.resolve(__dirname, '../');

describe('application launch', function () {
    this.timeout(10000);

    before(function () {
        this.app = new Application({
            path: electron,
            args: [appPath]
        });

        return this.app.start().then(function() {
            console.log("started");
        });
    });

    after(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop();
        }
    });

    it('shows an initial window', function () {
        return this.app.client.getWindowCount().then(function (count) {
            assert.equal(count, 1)
        });
    });

    it('tests the title', function () {
        return app.client.waitUntilWindowLoaded().getTitle()
        .should.eventually.equal('maichartplayer');
    });
});

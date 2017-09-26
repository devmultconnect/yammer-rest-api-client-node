var util = require('util'),
    YammerAPI = require('./base');

module.exports = YammerGroupMembershipsAPI;

function YammerGroupMembershipsAPI(config) {
    YammerAPI.call(this, config);
}
util.inherits(YammerGroupMembershipsAPI, YammerAPI);

YammerAPI.addMethods({
	join: {
		api: "/group_memberships.json",
		method: "post"
	},
	leave: {
		api: function(id) { return("/group_memberships.json?group_id=" + id); }, 
		method: "delete"
	}
}, YammerGroupMembershipsAPI);
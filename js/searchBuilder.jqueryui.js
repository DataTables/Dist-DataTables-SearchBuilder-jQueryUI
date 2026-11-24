/*! SearchBuilder jQuery UI styling 2.1.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-jqui', 'datatables.net-searchbuilder'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-jqui')(root);

				if (! root.DataTable.SearchBuilder) {
					require('datatables.net-searchbuilder')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-jqui');

			if (! window.DataTable.SearchBuilder) {
				require('datatables.net-searchbuilder');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


Object.assign(DataTable.SearchBuilder.classes, {
    clearAll: 'ui-button ui-corner-all ui-widget dtsb-clearAll'
});
Object.assign(DataTable.Group.classes, {
    add: 'ui-button ui-corner-all ui-widget dtsb-add',
    clearGroup: 'ui-button ui-corner-all ui-widget dtsb-clearGroup',
    logic: 'ui-button ui-corner-all ui-widget dtsb-logic',
    search: 'ui-button ui-corner-all ui-widget dtsb-search'
});
Object.assign(DataTable.Criteria.classes, {
    condition: 'ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all dtsb-condition',
    data: 'ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all dtsb-data',
    delete: 'ui-button ui-corner-all ui-widget dtsb-delete',
    left: 'ui-button ui-corner-all ui-widget dtsb-left',
    right: 'ui-button ui-corner-all ui-widget dtsb-right',
    value: 'ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all dtsb-value'
});


return DataTable;
}));

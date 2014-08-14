/* JS functions for the menu items call */

// for onchange
function getMenuItems(menu)
{
	if(menu.value != null)
	{
		$.ajax({
				type: "post",
				url: "?/admin/plugin/mbmenu/getMenuItems/",
				cache: false,
				data: "&menuid="+menu.value,
				success: function(data)
						 {
						 	$("#linkparent").html(data);						
        				 }
			});
	}
}

// for onload on item edit
function loadMenuItems(menuid,linkparent)
{
	$.ajax({
			type: "post",
			url: "?/admin/plugin/mbmenu/getMenuItems/",
			cache: false,
			data: "&menuid="+menuid+"&linkparent="+linkparent,
			success: function(data)
					 {
					 	$("#linkparent").html(data);						
    				 }
		});
}

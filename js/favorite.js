$(document).ready(function(){
	//删
	deleteItem();

	//编辑
	edit();
	
	//添加
	add();

})

function deleteItem(){
	$('.glyphicon-trash').click(function(){
		$(this).parents('li').remove();
	});
}

function edit(){
	$('.glyphicon-edit').click(function(event){
		//alert($(this).tagName)
		favoriteItem=$(this).parents('td').prev().prev().children('div');
		favoriteItem.attr('contenteditable','true').focus();
		favoriteItem.blur(function(){
			$(this).attr('contenteditable','false');
		});
	});
}

function add(){
	$('.glyphicon-plus-sign').click(function(){

		$(this).parents('.pull-right').prev().append('<li>\
							<table>\
								<tr>\
									<td><div class="favoriteItem" contenteditable="true">新加的</div></td>\
									<td><a href="javascript:void(0);"><span class="glyphicon glyphicon-trash"></span></a></td>\
									<td><a href="javascript:void(0);"><span class="glyphicon glyphicon-edit"></span></a></td>\
								</tr>\
							</table>\
						</li>');
		edit();
		deleteItem();
	});
}
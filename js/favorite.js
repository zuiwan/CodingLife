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
									<td><div class="favoriteItem" contenteditable="true">新添加</div></td>\
									<td><a href="javascript:void(0);"><span class="glyphicon glyphicon-trash"></span></a></td>\
									<td><a href="javascript:void(0);"><span class="glyphicon glyphicon-edit"></span></a></td>\
								</tr>\
							</table>\
						</li>');
		favoriteItem=$(this).parents('.listContainer').find('li').last().find('.favoriteItem');
		favoriteItem.attr('contenteditable','true').focus();
		favoriteItem.blur(function(){
			$(this).attr('contenteditable','false');
		});

		edit();
		deleteItem();
	});
}

//for info.html

$(document).ready(function(){


	$('#runningInfo').click(function(){
		$('#runningInfoDetail').css('display','block');
		$('#basicInfoDetail').css('display','none');
		$(this).css('color','orange');
		$('#basicInfo').css('color','black');
	});
	$('#basicInfo').click(function(){
		$('#runningInfoDetail').css('display','none');
		$('#basicInfoDetail').css('display','block');
		$(this).css('color','orange');
		$('#runningInfo').css('color','black');
	});
})
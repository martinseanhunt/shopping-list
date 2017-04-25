$(function(){

	//State object
	var state = {
		items: []
	};

	//Modify State
	function addItem(state, item){
		var itemObject = {
			name: item,
			checked: false
		};
		state.items.push(itemObject);
		console.log(state.items);
	}

	function deleteItem(state, itemId){
		state.items.splice(itemId, 1);
	}

	function checkItem(state, itemId){
		state.items[itemId].checked = !state.items[itemId].checked;
	}

	//Render Function
	function renderList(state, element){
		var itemsHTML = state.items.map(function(item, index){
			console.log(item);
			if( item.checked === true ){
				var checkedClass = "shopping-item__checked";
			}else{
				var checkedClass = "";
			}
			var itemHTML =   
				'<li class="li-' + index +'">' +
			        '<span class="shopping-item ' + checkedClass +'">' + item.name + '</span>' + 
			        '<div class="shopping-item-controls">' +
			          '<button class="shopping-item-toggle">' +
			            '<span class="button-label">check</span>' +
			          '</button>' + 
			          '<button class="shopping-item-delete">' +
			            '<span class="button-label">delete</span>' +
			          '</button>' +
			        '</div>' +
	     		'</li>';
	     	return itemHTML;
		});

		element.html(itemsHTML);
	}

	// Listeners
	$('#js-shopping-list-form').submit(function(event) {
	    event.preventDefault();
	    addItem(state, $('#shopping-list-entry').val());
	    renderList(state, $('.shopping-list'));
	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(){
		var itemId = $(this).parents('li').attr("class").replace("li-", "");;

		deleteItem(state, itemId);
		renderList(state, $('.shopping-list'));
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(){
		var itemId = $(this).parents('li').attr("class").replace("li-", "");;

		checkItem(state, itemId);
		renderList(state, $('.shopping-list'));
	});

});





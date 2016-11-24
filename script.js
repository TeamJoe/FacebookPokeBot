setInterval(function(){
	var nodeList = document.getElementById('contentArea').getElementsByTagName('a');
	for (var i = 0, node; node = nodeList[i]; i++) { 
		if (node.getAttribute('title') == null 
				&& node.getAttribute('href') == '#' 
				&& node.getAttribute('role') == 'button'
				&& node.getAttribute('data-hover') != 'tooltip') {
			var rect = node.getBoundingClientRect();
			var element = document.elementFromPoint(((rect.right - rect.left) / 2) + rect.left, ((rect.bottom - rect.top) / 2) + rect.top);
			if (element === node) {
				node.click();
			}
		}
	}
}, 1000);

module.exports = function (m, n, fn) 
{
	/**
	 * Range.js - Returns an array with a range of numbers. Easy.
	 * 
	 * Call with m to receive [0, 1, ... m-1]
	 * Call with m and n to receive [m, m+1, ... n]
	 * Call with m, n and fn to receive [fn(m), fn(m+1), ... fn(n)]
	 * 
	 * Only supports positive integers where n is greater than m.
	 * 
	 * TODO: Add checks for positive integers
	 * TODO: Add a check that verifies n as greater than m.
	 * TODO: Support for ranges with negative numbers?
	 * 
	 * Is fn necessary? Just substitutes .map, which [] supports. 
	 * */
	
	var has_param = function (param) 
	{
		return typeof param != "undefined";	
	};
	
	var is_number = function (n)
	{
		return typeof n == "number";	
	};
	
	if ( has_param(m) )
	{
		if ( (has_param(m) && !is_number(m)) || (has_param(n) && !is_number(n)) )
		{
			throw Error("Arguments m and n must be numbers if supplied");
		}
		
		if ( !has_param(n) )
		{
			n = m-1;
			m = 0;
		}
		
		return Array((n+1)-m)
		.fill(0)
		.map(function (current_value, index) {
			var x = index+m;
			
			if (has_param(fn)) x = fn(x);
			
			return x;
		});
	}
};
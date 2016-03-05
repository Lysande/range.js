module.exports = function (m, n)
{
	/**
	 * Range.js - Returns an array with a range of numbers. Easy.
	 *
	 * Call with (m, n) to receive an array [m .. n-1].
	 * Calling with just m results in function currying.
	 *
	 * Ranges are always inclusive of m, exclusive of n, support negative numbers
	 * and requires n to be greater than or equal to n.
	 * */

	var is_number = function (n)
	{
		return typeof n == "number";
	};

	if (!is_number(m))
	{
		throw Error("Range requires at least one number.");
	};

	var __range = function (m, n)
	{
		if (n < m)
		{
			throw Error("Range cannot end before it begins.")
		}
		return Array(n-m).fill(0).map(function (e, i) { return  m+i;});
	};

	return (is_number(n)) ? __range(m, n) : function (n) { return __range(m, n); };

};

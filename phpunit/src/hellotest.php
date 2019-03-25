<?php

use C:\OSPanel\domains\localhost\Proba\phpunit\vendor\phpunit\phpunit\tests\unit\Framework\TestCaseTest;

class HelloTest extends TestCaseTest
{
	public function testIndexPage()
	{
		$hello = new Hello(name: "John");
		$this->assertEquals(expected: "Hello, John", $hello->index());
	}
}
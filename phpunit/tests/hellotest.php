<?php
use \PHPUnit\Framework\TestCase;
class HelloTest extends TestCase
{
	public function testIndexPage()
	{
		$hello = new Hello(name: "John");
		$this->assertEquals(expected: "Hello, John", $hello->index());
	}
}
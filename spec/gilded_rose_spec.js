var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

describe("Hand of Ragnaros", function() {

  it("should lower quality of 1 after update", function() {
    const gildedRose = new Shop([ new Item("Hand of Ragnaros", 20, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
    expect(items[0].sellIn).toEqual(19);
  });

});

// describe("Sulfuras", function() {

//   it("should quality never change after update", function() {
//     const gildedRose = new Shop([ new Item("Sulfuras", 20, 80) ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].quality).toEqual(80);
//   });

// });



describe("Backstage passes to a TAFKAL80ETC concert", function() {

  it("should increase the quality if sell by date is bigger than 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  });
  // it("quality should never be negative", function() {
  //   const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toEqual(0);
  // });

  it("should increase the quality by 2 if it remains 10days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  });

  it("should increase the quality by 3 if it remains 5days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("should never increase quality over 50 if it remains 10days or lower", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

});


describe("Aged Brie", function() {

  it("should increase quality of 1 after update", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 20, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
    expect(items[0].sellIn).toEqual(19);
  });
  it("should never increase quality over 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 20, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
    expect(items[0].sellIn).toEqual(19);
  });

});

describe("Sulfuras, Hand of Ragnaros", function() {

  it("quality and sellin should never decrease", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 20, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(20);
  });

});

describe("item", function() {

  it("should decrese quality by 2 if sellin has passed", function() {
    const gildedRose = new Shop([ new Item("toto", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
  });
  it("quality should never be negative", function() {
    const gildedRose = new Shop([ new Item("titi", 10, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

});
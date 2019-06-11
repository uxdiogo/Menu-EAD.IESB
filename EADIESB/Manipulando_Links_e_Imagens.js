function canAcceptCommand() {
    return true;
}

function commandButtons() {
    return new Array("Sim", "faz()", "Não", "window.close()");
}

function faz() {
    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"true\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtag qname=\"a\" qconvertednls=\"true\">\n<qtag qname=\"div\" qinside=\"true\">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"saibamais\">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"target\" param2=\"_blank\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtag qname=\"div\" qconvertednls=\"true\">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"ref_img\">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"figcaption\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtag qname=\"div\" qconvertednls=\"true\">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"centro\">\n</qattribute>\n<qtag qname=\"img\">\n</qtag>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"figure\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtag qname=\"div\" qconvertednls=\"true\">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"direita\">\n</qattribute>\n<qtag qname=\"img\">\n</qtag>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"figure\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtag qname=\"div\" qconvertednls=\"true\">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"esquerda\">\n</qattribute>\n<qtag qname=\"img\">\n</qtag>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"figure\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();





    this.close();

}

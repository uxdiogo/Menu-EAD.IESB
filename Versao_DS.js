function canAcceptCommand() {
    return true;
}

function commandButtons() {
    return new Array("Sim", "faz()", "Não", "window.close()");
}

function faz() {

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n  <queryparams matchcase=\"false\" ignorewhitespace=\"false"\ useregexp=\"false\" wholeword=\"false\" />\n  <find searchmode=\"site\">\n  <qtag qname=\"span\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"inf\"></qattribute></qtag>\n  </find>\n  <replace action=\"removeTagAndContents\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n  <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"false" />\n  <find searchmode=\"site\">\n  <qtag qname=\"span\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"mouse\"></qattribute></qtag>\n  </find>\n  <replace action=\"stripTag\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n  <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"false\" />\n  <find searchmode=\"site\">\n  <qtag qname=\"h2\" qconvertednls=\"true\"></qtag>\n  </find>\n  <replace action=\"changeTag\" param1=\"h3\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n  <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"false\" />\n  <find searchmode=\"site\">\n  <qtag qname=\"h1\" qconvertednls=\"true\"></qtag>\n  </find>\n  <replace action=\"changeTag\" param1=\"h2\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();


    this.close();

}
function canAcceptCommand() {
    return true;
}

function commandButtons() {
    return new Array("Sim", "faz()", "Não", "window.close()");
}

function faz() {



    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"true\" wholeword=\"false\" />\n<find searchmode=\"document">\n<qtag qname=\"a\" qconvertednls=\"true">\n<qattribute qname=\"onmouseover\" qcompare=\"=\" qvalue=\"\" qanyvalue=\"true">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeTagAndContents"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"a\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"span\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"CorpodeTexto">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"1Ttulo1">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"h1\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"h1\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"1Ttulo1">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\"Â"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"style\" qcompare=\"=\" qvalue=\"\" qanyvalue=\"true">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"style\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"2Ttulo2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"h2\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"h2\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"2Ttulo2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA1">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"h3\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"h3\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA1">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"h3\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"h3\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA3">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"h3\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"h3\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA3">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA4">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"h3\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"h3\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"3Ttulo3UIA4">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"class\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"v:shape\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"v:imagedata\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"img\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"w:wrap\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();


    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA1-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA1-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"destaque3"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA2-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA2-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"destaque3"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA3-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA3-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"destaque3"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA4-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"UIA4-Dest">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"destaque3"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qtext qname=\"http://tiny\" qconvertednls=\"true">\n</qtext>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qtext qname=\"http://tiny\" qconvertednls=\"true">\n</qtext>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"saibamais"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qtag qname=\"tr\" qinside=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"saibamais">\n</qattribute>\n</qtag>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"tr\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"saibamais">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"saibamais">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"saibamais">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"width\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"saibamais">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"bgcolor\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qattribute qname=\"bgcolor\" qcompare=\"=\" qvalue=\"#D9D9D9">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"bgcolor\" qcompare=\"=\" qvalue=\"#D9D9D9">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"destaque1"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"bgcolor\" qcompare=\"=\" qvalue=\"#D9D9D9">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"width\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"bgcolor\" qcompare=\"=\" qvalue=\"#D9D9D9">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"valign\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"bgcolor\" qcompare=\"=\" qvalue=\"#D9D9D9">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"bgcolor\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qtag qname=\"div\" qinside=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque1">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"tr\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque1">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque1">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qattribute qname=\"width\" qcompare=\"=\" qvalue=\"425">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"width\" qcompare=\"=\" qvalue=\"425">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"destaque2"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"tr\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque2">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque2">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">\n<qtext qname=\"&nbsp;\" qraw=\"true">\n</qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qattribute qname=\"width\" qcompare=\"=\" qvalue=\"368">\n</qattribute>\n<qattribute qname=\"colspan\" qcompare=\"=\" qvalue=\"3">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"width\" qcompare=\"=\" qvalue=\"368">\n</qattribute>\n<qattribute qname=\"colspan\" qcompare=\"=\" qvalue=\"3">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"citacao"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"width\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"colspan\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"valign\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qattribute qname=\"width\" qcompare=\"=\" qvalue=\"104">\n</qattribute>\n<qattribute qname=\"rowspan\" qcompare=\"=\" qvalue=\"2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"changeTag\" param1=\"div\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"width\" qcompare=\"=\" qvalue=\"104">\n</qattribute>\n<qattribute qname=\"rowspan\" qcompare=\"=\" qvalue=\"2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"setAttribute\" param1=\"class\" param2=\"autor"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"autor">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"width\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"autor">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"rowspan\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"autor">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"valign\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qtag qname=\"div\" qinside=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"autor">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"align\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"tr\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n<qtag qname=\"table\" qinside=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\"  param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"tr\" qconvertednls=\"true">\n<qtag qname=\"table\" qinside=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\"  param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n<qtag qname=\"div">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"citacao">\n</qattribute>\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\"  param1=\"\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"width\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"div\" qconvertednls=\"true">\n<qattribute qname=\"class\" qcompare=\"=\" qvalue=\"destaque2">\n</qattribute>\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"valign\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"img\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"o:title\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"p\" qconvertednls=\"true">\n<qtag qname=\"td\" qinside=\"true">\n</qtag>\n</qtag>\n</find>\n<replace action=\"stripTag\" param1=\"p\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"width\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"td\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"valign\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"border\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"cellpadding\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document">   <qtag qname=\"table\" qconvertednls=\"true">\n</qtag>\n</find>\n<replace action=\"removeAttribute\" param1=\"cellspacing\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document">\n   <qtag qname=\"div\" qconvertednls=\"true"><qattribute qname=\"style\" qcompare=\"=\" qvalue=\"\" qanyvalue=\"true"></qattribute></qtag>\n </find>\n <replace action=\"stripTag\" param1=\"cellspacing\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"div\" qconvertednls=\"true\"><qattribute qname=\"style\" qcompare=\"=\" qvalue=\"\" qanyvalue=\"true\"></qattribute></qtag>\n </find>\n <replace action=\"stripTag\" param1=\"cellspacing\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"p\" qconvertednls=\"true\"><qattribute qname=\"align\" qcompare=\"=\" qvalue=\"center\"></qattribute><qtag qname=\"img\"></qtag></qtag>\n </find>\n <replace action=\"setAttribute\" param1=\"class\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"p\" qconvertednls=\"true\"><qattribute qname=\"align\" qcompare=\"=\" qvalue=\"center\"></qattribute><qtag qname=\"img\"></qtag></qtag>\n </find>\n <replace action=\"changeTag\" param1=\"div\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"&nbsp;&nbsp;\" qconvertednls=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"p\" qconvertednls=\"true\"><qtext qname=\"&sect;\" qconvertednls=\"true\"></qtext></qtag>\n </find>\n <replace action=\"changeTag\" param1=\"li\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"&sect;\" qconvertednls=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"p\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"MsoNormal\"></qattribute></qtag>\n </find>\n <replace action=\"removeAttribute\" param1=\"class\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"br\" qconvertednls=\"true\"><qattribute qname=\"style\" qcompare=\"=\" qvalue=\"MsoNormal\" qanyvalue=\"true\"></qattribute></qtag>\n </find>\n <replace action=\"removeTagAndContents\" param1=\"class\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"&lt;b&gt; &lt;/b&gt;\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"&lt;i&gt; &lt;/i&gt;\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"UIA2_files/\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"files/images/uia2/\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"UIA1_files/\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"files/images/uia1/\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"UIA3_files/\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"files/images/uia3/\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"true\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"UIA4_files/\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\"files/images/uia4/\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"div\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"RefImagem\"></qattribute></qtag>\n </find>\n <replace action=\"addBeforeEnd\" param1=\"&quot;/>\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"div\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"RefImagem\"></qattribute></qtag>\n </find>\n <replace action=\"removeAttribute\" param1=\"align\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtext qname=\"/&gt;&lt;/div&gt;\n&lt;div class=RefImagem&gt;\" qraw=\"true\"></qtext>\n </find>\n <replace action=\"replaceText\" param1=\" alt&quot;\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"p\" qconvertednls=\"true\"><qtag qname=\"img\"><qattribute qname=\"class\" qnegate=\"true\"></qattribute></qtag></qtag>\n </find>\n <replace action=\"setAttribute\" param1=\"class\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"p\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"centro\"></qattribute></qtag>\n </find>\n <replace action=\"changeTag\" param1=\"div\" param2=\"centro"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"img\" qconvertednls=\"true\"><qattribute qname=\"height\" qcompare=\"=\" qvalue=\"\" qanyvalue=\"true\"></qattribute></qtag>\n </find>\n <replace action=\"removeAttribute\" param1=\"height\" param2=\"400px"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0"?>\n<dwquery>\n <queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n <find searchmode=\"document\">\n   <qtag qname=\"img\" qconvertednls=\"true\"><qattribute qname=\"id\" qcompare=\"=\" qvalue=\"\" qanyvalue=\"true\"></qattribute></qtag>\n </find>\n <replace action=\"removeAttribute\" param1=\"id\" param2=\""/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [1] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [2] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [3] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [4] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [5] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [6] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [7] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [8] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [9] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [10] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [11] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [12] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [13] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [14] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [15] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [16] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [17] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [18] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [19] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [20] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [21] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [22] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [23] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [24] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [25] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [26] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [27] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [28] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [29] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [30] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [31] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version="1.0"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtext qname=\" [32] \"qconvertednls=\"true\"></qtext>\n</find>\n<replace action=\"replaceText\" param1=\"\" param2=\"\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" />\n<find searchmode=\"document\">\n<qtag qname=\"div\" qconvertednls=\"true\"><qtag qname=\"p\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"rodap\"></qattribute></qtag></qtag>\n</find>\n<replace action=\"stripTag\" param1=\"height\" param2=\"400px\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\"/>\n<find searchmode=\"document\">\n<qtag qname=\"p\" qconvertednls=\"true\"><qattribute qname=\"class\" qcompare=\"=\" qvalue=\"rodap\"></qattribute></qtag>\n</find>\n<replace action=\"removeTagAndContents\" param1=\"height\" param2=\"400px\"/>\n</dwquery>');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\"/>\n<find searchmode=\"document\">\n<qtag qname=\"style\" qconvertednls=\"true\"></qtag>\n</find>\n<replace action=\"removeTagAndContents\" param1=\"height\" param2=\"400px\"/>\n</dwquery>');
    dreamweaver.replaceAll();


    this.close();

}
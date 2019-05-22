function canAcceptCommand() {
    return true;
}

function commandButtons() {
    return new Array("Sim", "faz()", "Não", "window.close()");
}

function faz() {
    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtext qname=\" (UIAs) \" qraw=\"true\" qtagname=\"[qualquer tag]\">\n</qtext>\n</find>\n<replace action=\"replaceText\" param1=\" \" param2=\"\"/>\n</dwquery>\n');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtext qname=\"UIA 1\" qtagname=\"[qualquer tag]\" qconvertednls=\"true\">\n<qtag qname=\"[qualquer tag]\" qinside=\"true\" qnegate=\"true\">\n</qtag>\n</qtext>\n</find>\n<replace action=\"replaceText\" param1=\"Unidade 1\" param2=\"\"/>\n</dwquery>\n');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtext qname=\"UIA 2\" qtagname=\"[qualquer tag]\" qconvertednls=\"true\">\n<qtag qname=\"[qualquer tag]\" qinside=\"true\" qnegate=\"true\">\n</qtag>\n</qtext>\n</find>\n<replace action=\"replaceText\" param1=\"Unidade 2\" param2=\"\"/>\n</dwquery>\n');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtext qname=\"UIA 3\" qtagname=\"[qualquer tag]\" qconvertednls=\"true\">\n<qtag qname=\"[qualquer tag]\" qinside=\"true\" qnegate=\"true\">\n</qtag>\n</qtext>\n</find>\n<replace action=\"replaceText\" param1=\"Unidade 3\" param2=\"\"/>\n</dwquery>\n');
    dreamweaver.replaceAll();

    dreamweaver.setUpComplexFindReplace('<?xml version=\"1.0\"?>\n<dwquery>\n<queryparams matchcase=\"false\" ignorewhitespace=\"false\" useregexp=\"false\" wholeword=\"false\" textonly=\"true\" />\n<find searchmode=\"site\">\n<qtext qname=\"UIA 4\" qtagname=\"[qualquer tag]\" qconvertednls=\"true\">\n<qtag qname=\"[qualquer tag]\" qinside=\"true\" qnegate=\"true\">\n</qtag>\n</qtext>\n</find>\n<replace action=\"replaceText\" param1=\"Unidade 4\" param2=\"\"/>\n</dwquery>\n');
    dreamweaver.replaceAll();




    this.close();

}
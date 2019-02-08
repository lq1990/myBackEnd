<?php
    // 打开要写入的文件 
    $myfile = fopen("dingcan.txt","a");
    $txt = "哈哈\r\n";
    fwrite($myfile, $txt);

    // 关闭
    fclose($myfile);
?>
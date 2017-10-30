<?php 
/**
 * font pt1: https://youtu.be/4mTJ2qY1Pa8
 * font pt2: https://youtu.be/NkPRQiUTess 
*/    
  $list = array(
      array('id'=> 1, 'name'=>'lorem', 'email'=>'lorem@teste.com'),
      array('id'=> 2, 'name'=>'ipsum', 'email'=>'ipsum@teste.com'),
      array('id'=> 3, 'name'=>'dolor', 'email'=>'dolor@teste.com'),
)  ;

?><!DOCTYPE HTML>
<html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>tableedit</title>
<style type="text/css" media="all">
   table{ border-collapse: collapse} 
   table, td, th{
        border:1px solid #000;
        padding:5px
}
</style>
    </head>
<body>
    <table id="tblEdit">
    <thead>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>email</th>
    </tr>
    </thead>
    <tbody>
<?php foreach($list as $row){ ?>
    <tr>
        <td><?php echo $row['id']; ?></td>
        <td rel="name" class="jx_update"><?php echo $row['name']; ?></td>
        <td rel="email" class="jx_update"><?php echo $row['email']; ?></td>
    </tr>
<?php } ?>
    </tbody>
    </table>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="table.js"></script>

</body>
</html>

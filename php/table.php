<table width="70%" class="result_table" id="result_table">
    <tbody>
    <tr>
        <th width="10%">
            X
        </th>
        <th width="10%">
            Y
        </th>
        <th width="10%">
            R
        </th>
        <th width="16.7%">
            Current Time
        </th>
        <th width="16.7%">
            Execution Time
        </th>
        <th width="16.7%">
            Hit Result
        </th>
    </tr>
    <?php foreach ($_SESSION['history'] as $value) { ?>
        <tr align="center">
            <td><?php echo $value[0] ?></td>
            <td><?php echo $value[1] ?></td>
            <td><?php echo $value[2] ?></td>
            <td><?php echo $value[3] ?></td>
            <td><?php echo number_format($value[4], 10, ".", "") * 1000000 ?></td>
            <?php if ($value[5] === "FALSE") { ?>
                <td class = "red"> <?php echo $value[5] ?></td>
            <?php } ?>
            <?php if ($value[5] === "TRUE") { ?>
                <td class = "green"> <?php echo $value[5] ?></td>
            <?php } ?>
        </tr>
    <?php }?>
    </tbody>
</table>

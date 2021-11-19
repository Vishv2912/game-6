class Maze {
    constructor(x) {
        console.log("Maze");
        //wall is created as an array

        /* wall_v_00_a*/ wall[0] = createSprite(x + 0, 350, 5, 700);
        /* wall_v_01_a*/ wall[1] = createSprite(x + 50, 100, 5, 100);
        /* wall_v_01_b*/ wall[2] = createSprite(x + 50, 275, 5, 150);
        /* wall_v_01_c*/ wall[3] = createSprite(x + 50, 525, 5, 250);
        /* wall_v_02_a*/ wall[4] = createSprite(x + 100, 175, 5, 150);
        /* wall_v_02_b*/ wall[5] = createSprite(x + 100, 375, 5, 50);
        /* wall_v_02_c*/ wall[6] = createSprite(x + 100, 525, 5, 150);
        /* wall_v_03_a*/ wall[7] = createSprite(x + 150, 75, 5, 150);
        /* wall_v_03_b*/ wall[8] = createSprite(x + 150, 525, 5, 50);
        /* wall_v_04_a*/ wall[9] = createSprite(x + 200, 225, 5, 50);
        /* wall_v_04_b*/ wall[10] = createSprite(x + 200, 325, 5, 50);
        /* wall_v_05_a*/ wall[11] = createSprite(x + 250, 175, 5, 150);
        /* wall_v_05_a*/ wall[12] = createSprite(x + 250, 525, 5, 50);
        /* wall_v_06_a*/ wall[13] = createSprite(x + 300, 100, 5, 100);
        /* wall_v_06_b*/ wall[14] = createSprite(x + 300, 250, 5, 100);
        /* wall_v_06_b*/ wall[15] = createSprite(x + 300, 575, 5, 250);
        /* wall_v_07_a*/ wall[16] = createSprite(x + 350, 25, 5, 50);
        /* wall_v_07_a*/ wall[17] = createSprite(x + 350, 200, 5, 200);
        /* wall_v_07_a*/ wall[18] = createSprite(x + 350, 500, 5, 200);
        /* wall_v_07_a*/ wall[19] = createSprite(x + 350, 675, 5, 50);
        /* wall_v_08_a*/ wall[20] = createSprite(x + 400, 125, 5, 50);
        /* wall_v_08_a*/ wall[21] = createSprite(x + 400, 275, 5, 150);
        /* wall_v_08_a*/ wall[22] = createSprite(x + 400, 550, 5, 200);
        /* wall_v_09_a*/ wall[23] = createSprite(x + 450, 125, 5, 50);
        /* wall_v_09_a*/ wall[24] = createSprite(x + 450, 525, 5, 150);
        /* wall_v_10_a*/ wall[25] = createSprite(x + 500, 175, 5, 50);
        /* wall_v_10_a*/ wall[26] = createSprite(x + 500, 425, 5, 50);
        /* wall_v_10_a*/ wall[27] = createSprite(x + 500, 575, 5, 50);
        /* wall_v_11_a*/ wall[28] = createSprite(x + 550, 175, 5, 50);
        /* wall_v_11_a*/ wall[29] = createSprite(x + 550, 375, 5, 50);
        /* wall_v_11_a*/ wall[30] = createSprite(x + 550, 475, 5, 50);
        /* wall_v_11_a*/ wall[31] = createSprite(x + 550, 625, 5, 50);
        /* wall_v_12_a*/ wall[32] = createSprite(x + 600, 125, 5, 50);
        /* wall_v_12_a*/ wall[33] = createSprite(x + 600, 225, 5, 50);
        /* wall_v_12_a*/ wall[34] = createSprite(x + 600, 325, 5, 50);
        /* wall_v_12_a*/ wall[35] = createSprite(x + 600, 525, 5, 150);
        /* wall_v_13_a*/ wall[36] = createSprite(x + 650, 100, 5, 100);
        /* wall_v_13_a*/ wall[37] = createSprite(x + 650, 250, 5, 100);
        /* wall_v_13_a*/ wall[38] = createSprite(x + 650, 475, 5, 150);
        /* wall_v_13_a*/ wall[39] = createSprite(x + 650, 625, 5, 50);
        /* wall_v_14_a*/ wall[40] = createSprite(x + 700, 350, 5, 700);
        /* wall_h_00_a*/ wall[41] = createSprite(x + 350, 0, 700, 5);
        /* wall_h_01_a*/ wall[42] = createSprite(x + 225, 50, 150, 5);
        /* wall_h_01_b*/ wall[43] = createSprite(x + 375, 50, 50, 5);
        /* wall_h_01_b*/ wall[44] = createSprite(x + 550, 50, 200, 5);
        /* wall_h_02_a*/ wall[45] = createSprite(x + 225, 100, 50, 5);
        /* wall_h_02_a*/ wall[46] = createSprite(x + 525, 100, 150, 5);
        /* wall_h_03_a*/ wall[47] = createSprite(x + 75, 150, 50, 5);
        /* wall_h_03_a*/ wall[48] = createSprite(x + 175, 150, 50, 5);
        /* wall_h_03_a*/ wall[49] = createSprite(x + 575, 150, 50, 5);
        /* wall_h_04_a*/ wall[50] = createSprite(x + 175, 200, 50, 5);
        /* wall_h_04_a*/ wall[51] = createSprite(x + 450, 200, 100, 5);
        /* wall_h_05_a*/ wall[52] = createSprite(x + 125, 250, 50, 5);
        /* wall_h_05_a*/ wall[53] = createSprite(x + 225, 250, 50, 5);
        /* wall_h_05_a*/ wall[54] = createSprite(x + 525, 250, 150, 5);
        /* wall_h_06_a*/ wall[55] = createSprite(x + 100, 300, 100, 5);
        /* wall_h_06_b*/ wall[56] = createSprite(x + 250, 300, 100, 5);
        /* wall_h_06_b*/ wall[57] = createSprite(x + 475, 300, 150, 5);
        /* wall_h_06_b*/ wall[58] = createSprite(x + 625, 300, 50, 5);
        /* wall_h_07_a*/ wall[59] = createSprite(x + 25, 350, 50, 5);
        /* wall_h_07_a*/ wall[60] = createSprite(x + 350, 350, 500, 5);
        /* wall_h_07_a*/ wall[61] = createSprite(x + 675, 350, 50, 5);
        /* wall_h_08_a*/ wall[62] = createSprite(x + 175, 400, 250, 5);
        /* wall_h_08_a*/ wall[63] = createSprite(x + 450, 400, 100, 5);
        /* wall_h_08_a*/ wall[64] = createSprite(x + 600, 400, 100, 5);
        /* wall_h_09_a*/ wall[65] = createSprite(x + 175, 450, 150, 5);
        /* wall_h_09_a*/ wall[66] = createSprite(x + 475, 450, 50, 5);
        /* wall_h_10_a*/ wall[67] = createSprite(x + 200, 500, 100, 5);
        /* wall_h_10_a*/ wall[68] = createSprite(x + 525, 500, 50, 5);
        /* wall_h_11_a*/ wall[69] = createSprite(x + 175, 550, 50, 5);
        /* wall_h_11_a*/ wall[70] = createSprite(x + 275, 550, 50, 5);
        /* wall_h_11_a*/ wall[71] = createSprite(x + 525, 550, 50, 5);
        /* wall_h_12_a*/ wall[72] = createSprite(x + 175, 600, 150, 5);
        /* wall_h_12_a*/ wall[73] = createSprite(x + 475, 600, 50, 5);
        /* wall_h_12_a*/ wall[74] = createSprite(x + 575, 600, 50, 5);
        /* wall_h_12_a*/ wall[75] = createSprite(x + 675, 600, 50, 5);
        /* wall_h_13_a*/ wall[76] = createSprite(x + 150, 650, 200, 5);
        /* wall_h_13_a*/ wall[77] = createSprite(x + 525, 650, 250, 5);
        /* wall_h_14_a*/ wall[78] = createSprite(x + 325, 700, 650, 5);

        //using for loop and wall as an array to color all the walls
        for (var i = 0; i < 79; i++)
        {
            wall[i].shapeColor = "255"
///image(horizontalwall,200,100,20,20)
        }

    }
    collidePlayer() {
        //make the playerSprite collide with all walls
        for (var i = 0; i < 79; i++)
        {
           player.sprite.collide(wall[i])
            diamond.collide(wall[i])
        }
    }
}
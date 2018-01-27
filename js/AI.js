function setEnemies(){
    var enem1 =  {type:0, img:'sprites/guard.png', posX: 300, posY: 400, pos: 0, mov: false, lv: 1, life: 10, atk: 4, atk: 4, df:0, sp: 4};
    enemy.push(enem1);
}

function IAupdate() {
	var enemy_index;
	for (enemy_index in enemy){
		var dir_val = Math.floor(Math.random()*40); //Integers from 0 to 9.
		if(dir_val==1||dir_val==2||dir_val==3||dir_val==4){
			enemy[enemy_index].pos= -1;
		}
		if(dir_val==1 || enemy[enemy_index].pos==1){if(collision(enemy[enemy_index].posX-speed,enemy[enemy_index].posY)){enemy[enemy_index].posX=enemy[enemy_index].posX-speed;enemy[enemy_index].mov=true;enemy[enemy_index].pos=1;}}
		else if(dir_val==2 || enemy[enemy_index].pos==2){if(collision(enemy[enemy_index].posX,enemy[enemy_index].posY-speed)){enemy[enemy_index].posY=enemy[enemy_index].posY-speed;enemy[enemy_index].mov=true;enemy[enemy_index].pos=2;}}
		else if(dir_val==3 || enemy[enemy_index].pos==3){if(collision(enemy[enemy_index].posX+speed,enemy[enemy_index].posY)){enemy[enemy_index].posX=enemy[enemy_index].posX+speed;enemy[enemy_index].mov=true;enemy[enemy_index].pos=3;}}
		else if(dir_val==4 || enemy[enemy_index].pos==0){if(collision(enemy[enemy_index].posX,enemy[enemy_index].posY+speed)){enemy[enemy_index].posY=enemy[enemy_index].posY+speed;enemy[enemy_index].mov=true;enemy[enemy_index].pos=0;}}
		else {
			enemy[enemy_index].mov=false;
		}
	}
}
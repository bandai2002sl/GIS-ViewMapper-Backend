
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { PermissionManager } from './permission-manager.entity';

@Entity({name: 'Account'})
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  
  @Column({ default: 1 })
  role: number;
  
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;
  
  @Column({ nullable: true, default: null })
  refresh_token: string;
  

  @OneToMany(() => PermissionManager, (permissionManager) => permissionManager.user, { cascade: true })
  permissionManager: PermissionManager[];



}
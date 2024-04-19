// permission-manager.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity'; // Đổi tên User thành Account nếu đây là Entity của tài khoản người dùng

@Entity('PermissionManager')
export class PermissionManager {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // Đổi tên thành userId để phản ánh khóa ngoại đúng với tên trường trong bảng

  @Column()
  permissionId: number;

  @Column({ nullable: true }) // Nếu pageKey có thể là null
  pageKey: string;

  @Column({ default: 1 }) // Nếu active mặc định là 1
  active: number;

  @ManyToOne(() => User, (account) => account.permissionManager)
  @JoinColumn({ name: 'userId' })
  user: User;
}

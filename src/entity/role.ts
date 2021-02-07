import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Id, Status, Timestamp } from '../datatype';

@Entity()
export class Role {
  @PrimaryGeneratedColumn(Id)
  id: number;

  @Column({ length: 200, nullable: false, unique: true, comment: '权限组代码' })
  key: string;

  @Column({ type: 'json', nullable: false, comment: '权限组名称' })
  name: object;

  @Column({ type: 'longtext', nullable: false, comment: '特殊授权' })
  permission: string;

  @Column({ type: 'text', comment: '备注' })
  note: string;

  @Column(Status())
  status: number;

  @Column(Timestamp)
  create_time: number;

  @Column(Timestamp)
  update_time: number;
}

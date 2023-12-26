import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";

@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  async create(@Body() dto: CreateRoleDto) {
    return await this.roleService.createRole(dto);
  }

  @Get("/:value")
  async getByValue(@Param("value") value: string) {
    return await this.roleService.getRoleByValue(value);
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WorkflowService } from './workflow.service.js';
import { CreateWorkflowDto } from './dto/create-workflow.dto.js';
import { UpdateWorkflowDto } from './dto/update-workflow.dto.js';
import { ExecuteWorkflowDto } from './dto/execute-workflow.dto.js';
import { ApproveStepDto } from './dto/approve-step.dto.js';
import { RejectStepDto } from './dto/reject-step.dto.js';
import { WorkflowPermissionGuard } from './guards/workflow-permission.guard.js';

@Controller()
@UseGuards(WorkflowPermissionGuard)
export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService) {}

  @Post('workflows')
  @HttpCode(HttpStatus.CREATED)
  async createWorkflow(@Body() dto: CreateWorkflowDto) {
    return this.workflowService.createDefinition(dto);
  }

  @Put('workflows/:id')
  async updateWorkflow(@Param('id') id: string, @Body() dto: UpdateWorkflowDto, @Query('tenantId') tenantId?: string) {
    return this.workflowService.updateDefinition(id, dto, tenantId);
  }

  @Get('workflows')
  async listWorkflows(
    @Query('tenantId') tenantId?: string,
    @Query('organizationId') organizationId?: string,
    @Query('category') category?: string,
    @Query('status') status?: string
  ) {
    return this.workflowService.listDefinitions({ tenantId, organizationId, category, status });
  }

  @Get('workflows/:id')
  async getWorkflow(@Param('id') id: string, @Query('tenantId') tenantId?: string) {
    return this.workflowService.getDefinition(id, tenantId);
  }

  @Post('workflows/:id/start')
  @HttpCode(HttpStatus.OK)
  async startWorkflow(@Param('id') id: string, @Body() dto: ExecuteWorkflowDto) {
    return this.workflowService.startWorkflow(id, dto);
  }

  @Post('workflows/:id/cancel')
  @HttpCode(HttpStatus.OK)
  async cancelWorkflow(@Param('id') id: string, @Body() body: { reason?: string }, @Query('tenantId') tenantId?: string) {
    return this.workflowService.cancelWorkflow(id, body?.reason, tenantId);
  }

  @Post('workflows/:id/restart')
  @HttpCode(HttpStatus.OK)
  async restartWorkflow(@Param('id') id: string, @Query('tenantId') tenantId?: string) {
    return this.workflowService.restartWorkflow(id, tenantId);
  }

  @Post('workflows/:id/pause')
  @HttpCode(HttpStatus.OK)
  async pauseWorkflow(@Param('id') id: string, @Query('tenantId') tenantId?: string) {
    return this.workflowService.pauseWorkflow(id, tenantId);
  }

  @Post('workflows/:id/resume')
  @HttpCode(HttpStatus.OK)
  async resumeWorkflow(@Param('id') id: string, @Query('tenantId') tenantId?: string) {
    return this.workflowService.resumeWorkflow(id, tenantId);
  }

  @Post('workflows/:id/approve')
  @HttpCode(HttpStatus.OK)
  async approveStep(@Param('id') id: string, @Body() dto: ApproveStepDto) {
    return this.workflowService.approveStep(id, dto);
  }

  @Post('workflows/:id/reject')
  @HttpCode(HttpStatus.OK)
  async rejectStep(@Param('id') id: string, @Body() dto: RejectStepDto) {
    return this.workflowService.rejectStep(id, dto);
  }

  @Get('workflow-instances')
  async listInstances(
    @Query('tenantId') tenantId?: string,
    @Query('organizationId') organizationId?: string,
    @Query('definitionId') definitionId?: string,
    @Query('status') status?: string,
    @Query('userId') userId?: string
  ) {
    return this.workflowService.listInstances({ tenantId, organizationId, definitionId, status, userId });
  }

  @Get('workflow-instances/:id')
  async getInstance(@Param('id') id: string, @Query('tenantId') tenantId?: string) {
    return this.workflowService.getInstance(id, tenantId);
  }
}
